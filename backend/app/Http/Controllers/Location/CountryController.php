<?php

namespace App\Http\Controllers\Location;

use App\Http\Controllers\Controller;
use App\Models\Location\Country;
use Exception;
use Illuminate\Http\Request;

class CountryController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $coutries = Country::paginate(20);
        return view('Locations.countries', compact('coutries'));
    }

    public function getAllCountry()
    {
        return Country::all();
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
        try {

            $store = new Country();
            $store->country = $request->countryName;
            $store->code = $request->countryCode;
            $store->created_by = decrypt(session()->get('userId'));
            $store->status = 1;
            if ($store->save()) {
                return redirect()->back()->with('Country data saved');
                // return response()->json(['msg' => 'success', 'data' => $store,'total'=>$store->count()], 200);
            }
        } catch (Exception $error) {
            return redirect()->back()->with($this->resMessage(false, 'error', 'Cannot create floor details'));
            // return response()->json(['error' => 'Error'], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Location\country  $country
     * @return \Illuminate\Http\Response
     */
    public function show(country $country)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Location\country  $country
     * @return \Illuminate\Http\Response
     */
    public function edit(country $country)
    {
        //
        $coutries = Country::all();
        $countryData  = $country;
        return view('Locations.countries', compact(['coutries', 'countryData']));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Location\country  $country
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, country $country)
    {

        try {
            $identity = decrypt(session()->get('roleIdentity'));
            $update = $country;
            $update->country = $request->countryName;
            $update->created_by = decrypt(session()->get('userId'));
            $update->status = 1;
            if ($update->save()) {
                return redirect($identity . '/country')->with($this->resMessageHtml(true, false, 'Country data updated'));
            }
        } catch (Exception $error) {
            return redirect()->back()->with($this->resMessage(false, 'error', 'Cannot update'));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Location\country  $country
     * @return \Illuminate\Http\Response
     */
    public function destroy(country $country)
    {
        //
        $country->delete();
        return redirect()->back();
    }
}
