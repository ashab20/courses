<?php

namespace App\Http\Controllers;

use App\Models\module;
use Exception;
use Illuminate\Http\Request;

class modulesController extends Controller
{
    function getAllModule(){
        try {
            $modules =  module::all();
            if(!$modules) response('Data not Found!',404);
            return response($modules);
            
        } catch (Exception $err) {
            return response($err,500);
        }
    }

    function getSingleModule($id){
        try{
            $module = module::findOrfail($id);
            if(!$module) response('Data not found!',404);
            return response($module,200);

        }catch (Exception $err){
            return response('somthing is wrong',500);
        }
    }

    function addNewModule(Request $reques){
        try {
            
        } catch (Exception $err) {
            return response('Cannot add new Module',500);
        }
    }


    function updateModule(Request $reques,$id){
        try {
            
        } catch (Exception $err) {
            return response('Cannot update Module',500);
        }
    }

    function deleteModule($id){
        try{
            $module = module::destroy($id);
            if(!$module) response('Data not found!',404);
            return response('Data Deleted',200);

        }catch (Exception $err){
            return response('cannot delete data',500);
        }
    }
}
