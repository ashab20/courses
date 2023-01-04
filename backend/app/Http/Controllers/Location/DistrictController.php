<?php

namespace App\Http\Controllers\Location;

use App\Http\Controllers\Controller;
use App\Http\Traits\ResponseTraits;
use App\Models\Location\Country;
use App\Models\Location\District;
use App\Models\Location\Division;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Crypt;

class DistrictController extends Controller
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
        $districts = District::all();
        return view('Locations.districts',compact(['districts','countries','divisions']));
    }

    public function getDistrict($id)
    {        
        return District::where('division_id', $id)->get();   
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        
        $ur = Crypt::decrypt(session()->get('userId'));
        dd($ur);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        
        try{

            $store = new District();
            $store->district = $request->districtName;
            $store->division_id = $request->divisionName;
            $store->created_by = decrypt(session()->get('userId'));
            $store->status = 1;
            if ($store->save()) {
                return redirect()->back()->with($this->resMessageHtml(true, false, 'Country data saved'));
            }
        }catch(Exception $error){
            dd($error);
            return redirect()->back()->with($this->resMessage(false, 'error', 'Cannot create insert divison data'));

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Location\District  $district
     * @return \Illuminate\Http\Response
     */
    public function show(District $district)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Location\District  $district
     * @return \Illuminate\Http\Response
     */
    public function edit(District $district)
    {
        $divisions = Division::all();
        $districts = District::all();
        $districtData  = $district;
        return view('Locations.districts',compact(['districts','divisions','districtData']));
    
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Location\District  $district
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, District $district)
    {
        try{
            $identity = decrypt(session()->get('roleIdentity'));
            $update = $district;
            $update->district = $request->districtName;
            $update->division_id = $request->divisionName;
            $update->created_by = decrypt(session()->get('userId'));
            $update->status = 1;
            if ($update->save()) {
                return redirect($identity.'/district')->with($this->resMessageHtml(true, false, 'district data updated'));
            }
        }catch(Exception $error){
            return redirect()->back()->with($this->resMessage(false, 'error', 'Cannot update district name'));

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Location\District  $district
     * @return \Illuminate\Http\Response
     */
    public function destroy(District $district)
    {
        $district->delete();
        return redirect()->back();
    }
}
