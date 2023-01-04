<?php

namespace App\Http\Controllers;

use App\Models\enroll;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EnrollsController extends Controller
{
    function getAllEnroll(){
        try {
            $Enrolls =  enroll::all();
            if(!$Enrolls) response('Data not Found!',404);
            return response($Enrolls);
            
        } catch (Exception $err) {
            return response($err,500);
        }
    }

    function getSingleEnroll($id){
        try{
            $enroll = DB::select("SELECT * from enrolls JOIN students on enrolls.student_id=students.id JOIN courses on enrolls.course_id=courses.id WHERE enrolls.id=$id");
            if(!$enroll) response('Data not found!',404);
            return response($enroll,200);

        }catch (Exception $err){
            return response('somthing is wrong',500);
        }
    }

    function addNewEnroll(Request $reques){
        try {
            
        } catch (Exception $err) {
            return response('Cannot add new Enroll',500);
        }
    }


    function updateEnroll(Request $reques,$id){
        try {
            
        } catch (Exception $err) {
            return response('Cannot update Enroll',500);
        }
    }

    function deleteEnroll($id){
        try{
            $Enroll = enroll::destroy($id);
            if(!$Enroll) response('Data not found!',404);
            return response('Data Deleted',200);

        }catch (Exception $err){
            return response('cannot delete data',500);
        }
    }
}
