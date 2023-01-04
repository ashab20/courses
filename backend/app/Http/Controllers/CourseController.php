<?php

namespace App\Http\Controllers;

use App\Models\course;
use Exception;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    function getAllCourse()
    {
        try {
            $courses =  course::paginate(10);
            if (!$courses) response('Data not Found!', 404);

            $response = [
                'data' => $courses,
                'message' => ''
            ];
            return response($response, 200);
        } catch (Exception $err) {
            return response($err, 500);
        }
    }

    function getSingleCourse($id)
    {
        try {
            $course = course::findOrfail($id);
            if (!$course) response('Data not found!', 404);
            return response($course, 200);
        } catch (Exception $err) {
            return response('somthing is wrong', 500);
        }
    }

    function addNewCourse(Request $request)
    {


        // $request->validate([
        //     'course_name' => 'required',
        //     'thumbnile' =>  'nullable',
        //     'description' => 'required',
        //     'duration' => 'required',
        //     'start_date' =>   'nullable',
        //     'end_date' =>  'nullable',
        //     'price' => 'numeric','required'
        // ]);
        try {
            $course = new course();
            $course->course_name = $request->course_name;
            $course->thumbnile = $request->thumbnile;
            $course->description = $request->description;
            $course->duration = $request->duration;
            $course->start_date = $request->start_date;
            $course->end_date = $request->end_date;
            $course->price = $request->price;

            if ($course->save()) {
                $response = [
                    'message' => 'New Course added',
                    'course' => $course,
                    'status' => 'success',
                ];
                return response($response, 201);
            }
        } catch (Exception $err) {
            $response = [
                'message' => 'Cannot add new course',
                'error' => $err,
                'status' => 'failed',
            ];

            return response($response, 500);
        }
    }


    function updateCourse(Request $request, $id)
    {

        try {

            $course = course::where('id', $id)->first();
            $course->course_name = $request->course_name;
            $course->thumbnile = $request->thumbnile;
            $course->description = $request->description;
            $course->duration = $request->duration;
            $course->start_date = $request->start_date;
            $course->end_date = $request->end_date;
            $course->price = $request->price;

            if ($course->save()) {
                $response = [
                    'message' => 'Updated successfull',
                    'course' => $course,
                    'status' => 'success',
                ];
                return response($response, 201);
            }
        } catch (Exception $err) {
            $response = [
                'message' => 'Cannot update course',
                'error' => $err,
                'status' => 'failed',
            ];

            return response($response, 500);
        }
    }

    function deleteCourse($id)
    {
        try {
            $course = course::destroy($id);
            if (!$course) response('Data not found!', 404);
            return response('Data Deleted', 200);
        } catch (Exception $err) {
            return response('cannot delete data', 500);
        }
    }


    //
}
