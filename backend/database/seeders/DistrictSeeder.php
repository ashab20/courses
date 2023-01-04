<?php

namespace Database\Seeders;

use App\Models\Location\District;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DistrictSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $districts =  [
            [
                'district' => 'Gazipur',
                'division_id'=> 1,
                'created_by' => 1,
                'status' => 1,
            ],
            [
                'district' => 'Chittagong Shodor',
                'division_id'=> 2,
                'status' => 1,
                'created_by' => 1,
            ],
            [
                'district' => 'Cox\'s Bazar',
                'division_id'=> 2,
                'status' => 1,
                'created_by' => 1,
            ],
            [
                'district' => 'Dhaka City',
                'division_id'=> 1,
                'created_by' => 1,
                'status' => 1,
            ],
            [
                'district' => 'Bramnon Baria',
                'division_id'=> 1,
                'created_by' => 1,
                'status' => 1,
            ],
            [
                'district' => 'Forid Pur',
                'division_id'=> 1,
                'created_by' => 1,
                'status' => 1,
            ],
        ];


        foreach ($districts as $key => $value) {

            District::create($value);
        }
    }
}
