<?php

namespace App\Http\Controllers\Location;

use App\Http\Controllers\Controller;
use App\Http\Traits\ResponseTraits;
use App\Models\Location\Country;
use App\Models\Location\District;
use App\Models\Location\Division;
use Exception;
use Illuminate\Http\Request;

class DivisionController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $countries = Country::all();
        $divisions = Division::all();
        return view('Locations.divisions',compact(['divisions','countries']));
    }
    public function getDivision($id)
    {        
        return Division::where('country_id', $id)->get();   
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{

            $store = new Division();
            $store->country_id = $request->countryName;
            $store->divison = $request->divisonName;
            $store->created_by = decrypt(session()->get('userId'));
            $store->status = 1;
            if ($store->save()) {
                return redirect()->back()->with($this->resMessageHtml(true, false, 'Country data saved'));
            }
        }catch(Exception $error){
            return redirect()->back()->with($this->resMessage(false, 'error', 'Cannot create insert divison data'));

        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Location\Division  $division
     * @return \Illuminate\Http\Response
     */
    public function show(Division $division)
    {
        //
        $division = Division::findOrFail($division)->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Location\Division  $division
     * @return \Illuminate\Http\Response
     */
    public function edit(Division $division)
    {
        $divisions = Division::all();
        $divisionData  = $division;
        $countries = Country::all();
        return view('Locations.divisions',compact(['divisions','divisionData','countries']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Location\Division  $division
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Division $division)
    {
        try{
            $identity = decrypt(session()->get('roleIdentity'));
            $update = $division;
            $update->country_id = $request->countryName;
            $update->divison = $request->divisonName;
            $update->created_by = decrypt(session()->get('userId'));
            $update->status = 1;
            if ($update->save()) {
                return redirect($identity.'/division')->with($this->resMessageHtml(true, false, 'Division data updated'));
            }
        }catch(Exception $error){
            return redirect()->back()->with($this->resMessage(false, 'error', 'Cannot update divison name'));

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Location\Division  $division
     * @return \Illuminate\Http\Response
     */
    public function destroy(Division $division)
    {
        
        $division->delete();
        return redirect()->back();
    }
}
