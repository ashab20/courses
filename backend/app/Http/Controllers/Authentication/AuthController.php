<?php

namespace App\Http\Controllers\Authentication;

use Illuminate\Routing\Controller;
use App\Models\Auth\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Validation\Rules\Password as RulesPassword;

class AuthController extends Controller
{

    public function checkUserData(Request $request){
        try{

            $request->validate([
                'userEmail'=>'email'
            ]);

            $user = User::where('email', $request->userEmail)->first();

            if(!$user){
                return response([
                    'message' => 'availbel',
                    'status' => 'success'
                ],'200');
            }else{
                return response([
                    'message' => 'user already exist',
                    'status' => 'success'
                ],'200');
            }
        }catch(Exception $err){
            return response([
                'message' => 'Something goes wrong!',
                'status' => 'success'
            ],'404');
        }

    }

    public function userRegistration(Request $request)
    {

        $request->validate([
            'userName' => 'required',
            'userEmail' => 'required|email|unique:users,email',
            'userPassword' => ['required', 'same:userConfirmPassword', RulesPassword::min(6)->mixedCase()],
            'role_id' => ''
        ]);

        try {

            $user = new User();
            $user->name =  $request->userName;
            $user->email =  $request->userEmail;
            $user->role_id =  $request->role_id ? $request->role_id : 2;
            $user->password =  Crypt::encrypt($request->userPassword);
            $user->status =  json_decode($request->status);

            if ($user->save()) {
                $ability = [];
                if ($user->role_id === 1) {
                    $ability = ['*'];
                } else if ($user->role_id === 2) {
                    $ability = ['server:update'];
                } else {
                    $ability = ['server:update'];
                }

                $expired = 7 * 24 * 60; //minutes
                $token = $user->createToken($user->email, $ability)->plainTextToken;

                return response([
                    'token' => $token,
                    'user' => $user,
                    'message' => 'Registration successfull',
                    'status' => 'success'
                ], 201);
            }
        } catch (Exception $error) {
            return response([
                'message' => $error,
                'status' => 'failed'
            ], 401);
        }
    }


    public function userLogin(Request $request)
    {
        $request->validate([
            'userEmail' => 'required|email',
            'userPassword' => 'required'
        ]);

        try {
            $user = User::where(['email'=> $request->userEmail])->first();

            if ($user && Crypt::decrypt($user->password) === $request->userPassword) {

                $ability = [];
                if ($user->role_id === 1) {
                    $ability = ['*'];
                } else if ($user->role_id === 2) {
                    $ability = ['server:update'];
                } else {
                    $ability = ['server:update'];
                }


                $expired = 7 * 24 * 60; //minutes
                $token = $user->createToken($user->email, $ability)->plainTextToken;

                return response([
                    'token' => $token,
                    'user' => $user,
                    'message' => 'Login successfull',
                    'status' => 'success'
                ], 200);
            } else {
                return response([
                    'message' => 'Authentication failed',
                    'status' => 'failed'
                ], 401);
            }
        } catch (Exception $error) {
            return response([
                'message' => 'Something Goes Wrong',
                'status' => 'failed'
            ], 401);
        }
    }



    public function userLogout()
    {
        auth()->user()->tokens()->delete();

        return response([
            'message' => 'Logout Successfull',
            'status' => 'success'
        ], 200);
    }


    public function LoggedUser()
    {
        $user = auth()->user();

        return response([
            'user' => $user,
            'message' => 'Logout Successfull',
            'status' => 'success'
        ], 200);
    }

    public function changePassword(Request $request)
    {

        $request->validate([
            'password' => ['required', 'same:password_confirmation', RulesPassword::min(6)->mixedCase()]
        ]);

        $user = auth()->user();
        $user->password = Crypt::encrypt($request->password);

        return response([
            'message' => 'Password Changed',
            'status' => 'success'
        ], 200);
    }
}
