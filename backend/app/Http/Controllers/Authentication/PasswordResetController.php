<?php

namespace App\Http\Controllers\Authentication;

use App\Http\Controllers\Controller;
use App\Models\Auth\PasswordReset;
use App\Models\Auth\User;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class PasswordResetController extends Controller
{
    public function sendResetPasswordEmail(Request $request)
    {
        $request->validate([
            'userEmail' => 'required'
        ]);
        try {
            //code...


            $email = $request->userEmail;
            $checkEmail = User::where('email', $email)->first();
            $reciverName = $checkEmail->name;

            if (!$checkEmail) {
                return response([
                    'message' => 'Emial Does not exist!',
                    'status' => 'success'
                ], 200);
            }

            // Generate token
            $token = Str::random(60);

            $reset = new PasswordReset();
            $reset->email = $email;
            $reset->token = $token;
            $reset->created_at = Carbon::now();

            if ($reset->save()) {
                dump('http://127.0.0.1/api/reset/' . $token);

                $message = "To reset your password, simple goto the link and request for new password.New password will generate for you.
                If you does not send this reques please avoid this email.";
    
                //  send email for rease password and token
                Mail::send(
                    'restpass',
                    [
                        'url' => 'http://127.0.0.1/api/reset',
                        'token' => $token,
                        'title' => 'You have requested to reset your password',
                        'message' => $message
                    ],
                    function ($mail) use ($email, $reciverName) {
                        $mail->to($email, $reciverName);
                        $mail->subject('Reset You Password');
                    }
                );

                return response([
                    'token'=>$token,
                    'message' => 'A varification email has been send on this email address',
                    'status' => 'success'
                ], 201);
            }

         
        } catch (Exception $err) {
            return response([
                'message' => 'Something Goes Wrong with this email address',
                'status' => 'failed'
            ], 500);
        }
    }


    public function resetPassword(Request $request,$token){

        $formated = Carbon::now()->subMinutes(10);
        PasswordReset::where('created_at','<=',$formated)->delete();

        $request->validate([
            'password' => 'required|confirmed'
        ]);

        $checkToken =PasswordReset::where('token',$token)->first();

        if(!$checkToken){
            return response([
                'message'=>'Token is Invalid or Expired',
                'status' => 'failed'
            ],404);
        }

        $user = User::where('email',$checkToken->email)->first();
        $user->password = Crypt::encrypt($request->password);
        if($user->save()){
            PasswordReset::where('email',$user->email)->delete();
            return response([
                'message'=>'Password reset successfully',
                'status' => 'success'
            ],200);
        }




    }
}
