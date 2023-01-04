<?php

namespace Database\Seeders;

use App\Models\Location\Division;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DivisionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $divisions =  [
            [
                'divison' => 'Dhaka',
                'country_id'=> 19,
                'created_by' => 1,
                'status' => 1,
            ],
            [
                'divison' => 'Chittagong',
                'country_id'=> 19,
                'status' => 1,
                'created_by' => 1,
            ],
            [
                'divison' => 'Rajshahi',
                'country_id'=> 19,
                'status' => 1,
                'created_by' => 1,
            ],
            [
                'divison' => 'Barishal',
                'country_id'=> 19,
                'created_by' => 1,
                'status' => 1,
            ],
            [
                'divison' => 'Maymonshinho',
                'country_id'=> 19,
                'created_by' => 1,
                'status' => 1,
            ],
            [
                'divison' => 'Kulna',
                'country_id'=> 19,
                'created_by' => 1,
                'status' => 1,
            ],
        ];


        foreach ($divisions as $key => $value) {

            Division::create($value);
        }
    }
}
