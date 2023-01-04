<?php

namespace App\Http\Controllers;

use App\Models\enroll;
use App\Models\students;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentsController extends Controller
{
    function getAllstudent()
    {
        try {
            $students =  students::paginate(10);
            if (!$students) response(['message' => 'Data not Found!', 'status' => 'failed'], 404);
            return response([
                'data' => $students,
                'status' => 'success'
            ], 200);
        } catch (Exception $err) {
            return response($err, 500);
        }
    }

    function getSingleStudent($id)
    {
        try {
            $student = students::findOrfail($id);
            if (!$student) response('Data not found!', 204);
            $res = [
                'data'=>$student,
                'message'=>'Ok',
                'status'=>'success'
            ];
            return response($res, 200);
        } catch (Exception $err) {
            $res = [
                'error'=>$err,
                'message'=>'Connot geting data',
                'status'=>'failed'
            ];
            return response($res, 500);
        }
    }

    function addNewstudent(Request $request)
    {
        // return $request;
        try {
            DB::beginTransaction();
            $student = new students();
            $student->name = $request->name;
            $student->email = $request->email;
            $student->phone = $request->phone;
            $student->father_name = $request->father_name;
            $student->mother_name = $request->mother_name;
            $student->date_of_birth = $request->date_of_birth;
            $student->gender = $request->gender;
            $student->address = $request->address;
            $student->country_id = $request->country_id;
            $student->division_id = $request->division_id;
            $student->district_id = $request->district_id;
            if ($student->save()) {
                // course_id 	student_id 	enroll_date 
                $enrolls = new enroll();
                $enrolls->course_id = $request->courseId;
                $enrolls->student_id = $student->id;
                $enrolls->enroll_date = date("Y-m-d H:i:s");
                $enrolls->discount = 0;
                $enrolls->payment  = $request->payment;
                if ($enrolls->save()) {
                    DB::commit();
                    return response($enrolls->id, 201);
                }
            } else {
                return response('Could net Create data', 500);
            }
        } catch (Exception $err) {
            DB::rollback();
            return response($err, 500);
        }
    }


    function updateStudent(Request $request, $id)
    {
        try {
            $student = students::where('id',$id)->first();
            $student->name = $request->name;
            $student->email = $request->email;
            $student->phone = $request->phone;
            $student->father_name = $request->father_name;
            $student->mother_name = $request->mother_name;
            $student->date_of_birth = $request->date_of_birth;
            $student->gender = $request->gender;
            $student->address = $request->address;
            $student->country_id = $request->country_id;
            $student->division_id = $request->division_id;
            $student->district_id = $request->district_id;
            if ($student->save()) {
               $res = [
                'message'=>'update successfull',
                'status'=>'success',
               ];
                    return response($res, 201);
                
            } else {
                return response('Could net Create data', 500);
            }
        } catch (Exception $err) {
            return response($err, 500);
        }
    }

    function deletestudent($id)
    {
        try {
            $student = students::destroy($id);
            if (!$student) response('Data not found!', 404);
            return response('Data Deleted', 200);
        } catch (Exception $err) {
            return response('cannot delete data', 500);
        }
    }
}
