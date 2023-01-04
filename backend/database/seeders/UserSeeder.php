<?php

namespace Database\Seeders;

use App\Models\Auth\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users =  [
            // admin 1
            [
                'name' => 'Ashab Uddin',
                'email' => 'ashab@gmail.com',
                'password' => Crypt::encryptString('12345678'),
                'role_id' => 1,
                'language' => 'en',
                'status' => 1,
            ],
            [
                'name' => 'Jahid Rony',
                'email' => 'jahid@gmail.com',
                'password' => Crypt::encryptString('12345678'),
                'role_id' => 2,
                'language' => 'en',
                'status' => 1,
            ]

        ];


        foreach ($users as $key => $value) {

            User::create($value);
        }
    }
}
