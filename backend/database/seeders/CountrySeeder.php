<?php

namespace Database\Seeders;

use App\Models\Location\Country;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Country::truncate();

  

        $countries = [

            ['country' => 'Afghanistan', 'code' => 'AF','created_by'=>1],

            ['country' => 'Åland Islands', 'code' => 'AX','created_by'=>1],

            ['country' => 'Albania', 'code' => 'AL','created_by'=>1],

            ['country' => 'Algeria', 'code' => 'DZ','created_by'=>1],

            ['country' => 'American Samoa', 'code' => 'AS','created_by'=>1],

            ['country' => 'Andorra', 'code' => 'AD','created_by'=>1],

            ['country' => 'Angola', 'code' => 'AO','created_by'=>1],

            ['country' => 'Anguilla', 'code' => 'AI','created_by'=>1],

            ['country' => 'Antarctica', 'code' => 'AQ','created_by'=>1],

            ['country' => 'Antigua and Barbuda', 'code' => 'AG','created_by'=>1],

            ['country' => 'Argentina', 'code' => 'AR','created_by'=>1],

            ['country' => 'Armenia', 'code' => 'AM','created_by'=>1],

            ['country' => 'Aruba', 'code' => 'AW','created_by'=>1],

            ['country' => 'Australia', 'code' => 'AU','created_by'=>1],

            ['country' => 'Austria', 'code' => 'AT','created_by'=>1],

            ['country' => 'Azerbaijan', 'code' => 'AZ','created_by'=>1],

            ['country' => 'Bahamas', 'code' => 'BS','created_by'=>1],

            ['country' => 'Bahrain', 'code' => 'BH','created_by'=>1],

            ['country' => 'Bangladesh', 'code' => 'BD','created_by'=>1],

            ['country' => 'Barbados', 'code' => 'BB','created_by'=>1],

            ['country' => 'Belarus', 'code' => 'BY','created_by'=>1],

            ['country' => 'Belgium', 'code' => 'BE','created_by'=>1],

            ['country' => 'Belize', 'code' => 'BZ','created_by'=>1],

            ['country' => 'Benin', 'code' => 'BJ','created_by'=>1],

            ['country' => 'Bermuda', 'code' => 'BM','created_by'=>1],

            ['country' => 'Bhutan', 'code' => 'BT','created_by'=>1],

            ['country' => 'Bolivia, Plurinational State of', 'code' => 'BO','created_by'=>1],

            ['country' => 'Bonaire, Sint Eustatius and Saba', 'code' => 'BQ','created_by'=>1],

            ['country' => 'Bosnia and Herzegovina', 'code' => 'BA','created_by'=>1],

            ['country' => 'Botswana', 'code' => 'BW','created_by'=>1],

            ['country' => 'Bouvet Island', 'code' => 'BV','created_by'=>1],

            ['country' => 'Brazil', 'code' => 'BR','created_by'=>1],

            ['country' => 'British Indian Ocean Territory', 'code' => 'IO','created_by'=>1],

            ['country' => 'Brunei Darussalam', 'code' => 'BN','created_by'=>1],

            ['country' => 'Bulgaria', 'code' => 'BG','created_by'=>1],

            ['country' => 'Burkina Faso', 'code' => 'BF','created_by'=>1],

            ['country' => 'Burundi', 'code' => 'BI','created_by'=>1],

            ['country' => 'Cambodia', 'code' => 'KH','created_by'=>1],

            ['country' => 'Cameroon', 'code' => 'CM','created_by'=>1],

            ['country' => 'Canada', 'code' => 'CA','created_by'=>1],

            ['country' => 'Cape Verde', 'code' => 'CV','created_by'=>1],

            ['country' => 'Cayman Islands', 'code' => 'KY','created_by'=>1],

            ['country' => 'Central African Republic', 'code' => 'CF','created_by'=>1],

            ['country' => 'Chad', 'code' => 'TD','created_by'=>1],

            ['country' => 'Chile', 'code' => 'CL','created_by'=>1],

            ['country' => 'China', 'code' => 'CN','created_by'=>1],

            ['country' => 'Christmas Island', 'code' => 'CX','created_by'=>1],

            ['country' => 'Cocos (Keeling) Islands', 'code' => 'CC','created_by'=>1],

            ['country' => 'Colombia', 'code' => 'CO','created_by'=>1],

            ['country' => 'Comoros', 'code' => 'KM','created_by'=>1],

            ['country' => 'Congo', 'code' => 'CG','created_by'=>1],

            ['country' => 'Congo, the Democratic Republic of the', 'code' => 'CD','created_by'=>1],

            ['country' => 'Cook Islands', 'code' => 'CK','created_by'=>1],

            ['country' => 'Costa Rica', 'code' => 'CR','created_by'=>1],

            ['country' => 'Côte d\'Ivoire', 'code' => 'CI','created_by'=>1],

            ['country' => 'Croatia', 'code' => 'HR','created_by'=>1],

            ['country' => 'Cuba', 'code' => 'CU','created_by'=>1],

            ['country' => 'Curaçao', 'code' => 'CW','created_by'=>1],

            ['country' => 'Cyprus', 'code' => 'CY','created_by'=>1],

            ['country' => 'Czech Republic', 'code' => 'CZ','created_by'=>1],

            ['country' => 'Denmark', 'code' => 'DK','created_by'=>1],

            ['country' => 'Djibouti', 'code' => 'DJ','created_by'=>1],

            ['country' => 'Dominica', 'code' => 'DM','created_by'=>1],

            ['country' => 'Dominican Republic', 'code' => 'DO','created_by'=>1],

            ['country' => 'Ecuador', 'code' => 'EC','created_by'=>1],

            ['country' => 'Egypt', 'code' => 'EG','created_by'=>1],

            ['country' => 'El Salvador', 'code' => 'SV','created_by'=>1],

            ['country' => 'Equatorial Guinea', 'code' => 'GQ','created_by'=>1],

            ['country' => 'Eritrea', 'code' => 'ER','created_by'=>1],

            ['country' => 'Estonia', 'code' => 'EE','created_by'=>1],

            ['country' => 'Ethiopia', 'code' => 'ET','created_by'=>1],

            ['country' => 'Falkland Islands (Malvinas)', 'code' => 'FK','created_by'=>1],

            ['country' => 'Faroe Islands', 'code' => 'FO','created_by'=>1],

            ['country' => 'Fiji', 'code' => 'FJ','created_by'=>1],

            ['country' => 'Finland', 'code' => 'FI','created_by'=>1],

            ['country' => 'France', 'code' => 'FR','created_by'=>1],

            ['country' => 'French Guiana', 'code' => 'GF','created_by'=>1],

            ['country' => 'French Polynesia', 'code' => 'PF','created_by'=>1],

            ['country' => 'French Southern Territories', 'code' => 'TF','created_by'=>1],

            ['country' => 'Gabon', 'code' => 'GA','created_by'=>1],

            ['country' => 'Gambia', 'code' => 'GM','created_by'=>1],

            ['country' => 'Georgia', 'code' => 'GE','created_by'=>1],

            ['country' => 'Germany', 'code' => 'DE','created_by'=>1],

            ['country' => 'Ghana', 'code' => 'GH','created_by'=>1],

            ['country' => 'Gibraltar', 'code' => 'GI','created_by'=>1],

            ['country' => 'Greece', 'code' => 'GR','created_by'=>1],

            ['country' => 'Greenland', 'code' => 'GL','created_by'=>1],

            ['country' => 'Grenada', 'code' => 'GD','created_by'=>1],

            ['country' => 'Guadeloupe', 'code' => 'GP','created_by'=>1],

            ['country' => 'Guam', 'code' => 'GU','created_by'=>1],

            ['country' => 'Guatemala', 'code' => 'GT','created_by'=>1],

            ['country' => 'Guernsey', 'code' => 'GG','created_by'=>1],

            ['country' => 'Guinea', 'code' => 'GN','created_by'=>1],

            ['country' => 'Guinea-Bissau', 'code' => 'GW','created_by'=>1],

            ['country' => 'Guyana', 'code' => 'GY','created_by'=>1],

            ['country' => 'Haiti', 'code' => 'HT','created_by'=>1],

            ['country' => 'Heard Island and McDonald Mcdonald Islands', 'code' => 'HM','created_by'=>1],

            ['country' => 'Holy See (Vatican City State)', 'code' => 'VA','created_by'=>1],

            ['country' => 'Honduras', 'code' => 'HN','created_by'=>1],

            ['country' => 'Hong Kong', 'code' => 'HK','created_by'=>1],

            ['country' => 'Hungary', 'code' => 'HU','created_by'=>1],

            ['country' => 'Iceland', 'code' => 'IS','created_by'=>1],

            ['country' => 'India', 'code' => 'IN','created_by'=>1],

            ['country' => 'Indonesia', 'code' => 'ID','created_by'=>1],

            ['country' => 'Iran, Islamic Republic of', 'code' => 'IR','created_by'=>1],

            ['country' => 'Iraq', 'code' => 'IQ','created_by'=>1],

            ['country' => 'Ireland', 'code' => 'IE','created_by'=>1],

            ['country' => 'Isle of Man', 'code' => 'IM','created_by'=>1],

            ['country' => 'Israel', 'code' => 'IL','created_by'=>1],

            ['country' => 'Italy', 'code' => 'IT','created_by'=>1],

            ['country' => 'Jamaica', 'code' => 'JM','created_by'=>1],

            ['country' => 'Japan', 'code' => 'JP','created_by'=>1],

            ['country' => 'Jersey', 'code' => 'JE','created_by'=>1],

            ['country' => 'Jordan', 'code' => 'JO','created_by'=>1],

            ['country' => 'Kazakhstan', 'code' => 'KZ','created_by'=>1],

            ['country' => 'Kenya', 'code' => 'KE','created_by'=>1],

            ['country' => 'Kiribati', 'code' => 'KI','created_by'=>1],

            ['country' => 'Korea, Democratic People\'s Republic of', 'code' => 'KP','created_by'=>1],

            ['country' => 'Korea, Republic of', 'code' => 'KR','created_by'=>1],

            ['country' => 'Kuwait', 'code' => 'KW','created_by'=>1],

            ['country' => 'Kyrgyzstan', 'code' => 'KG','created_by'=>1],

            ['country' => 'Lao People\'s Democratic Republic', 'code' => 'LA','created_by'=>1],

            ['country' => 'Latvia', 'code' => 'LV','created_by'=>1],

            ['country' => 'Lebanon', 'code' => 'LB','created_by'=>1],

            ['country' => 'Lesotho', 'code' => 'LS','created_by'=>1],

            ['country' => 'Liberia', 'code' => 'LR','created_by'=>1],

            ['country' => 'Libya', 'code' => 'LY','created_by'=>1],

            ['country' => 'Liechtenstein', 'code' => 'LI','created_by'=>1],

            ['country' => 'Lithuania', 'code' => 'LT','created_by'=>1],

            ['country' => 'Luxembourg', 'code' => 'LU','created_by'=>1],

            ['country' => 'Macao', 'code' => 'MO','created_by'=>1],

            ['country' => 'Macedonia, the Former Yugoslav Republic of', 'code' => 'MK','created_by'=>1],

            ['country' => 'Madagascar', 'code' => 'MG','created_by'=>1],

            ['country' => 'Malawi', 'code' => 'MW','created_by'=>1],

            ['country' => 'Malaysia', 'code' => 'MY','created_by'=>1],

            ['country' => 'Maldives', 'code' => 'MV','created_by'=>1],

            ['country' => 'Mali', 'code' => 'ML','created_by'=>1],

            ['country' => 'Malta', 'code' => 'MT','created_by'=>1],

            ['country' => 'Marshall Islands', 'code' => 'MH','created_by'=>1],

            ['country' => 'Martinique', 'code' => 'MQ','created_by'=>1],

            ['country' => 'Mauritania', 'code' => 'MR','created_by'=>1],

            ['country' => 'Mauritius', 'code' => 'MU','created_by'=>1],

            ['country' => 'Mayotte', 'code' => 'YT','created_by'=>1],

            ['country' => 'Mexico', 'code' => 'MX','created_by'=>1],

            ['country' => 'Micronesia, Federated States of', 'code' => 'FM','created_by'=>1],

            ['country' => 'Moldova, Republic of', 'code' => 'MD','created_by'=>1],

            ['country' => 'Monaco', 'code' => 'MC','created_by'=>1],

            ['country' => 'Mongolia', 'code' => 'MN','created_by'=>1],

            ['country' => 'Montenegro', 'code' => 'ME','created_by'=>1],

            ['country' => 'Montserrat', 'code' => 'MS','created_by'=>1],

            ['country' => 'Morocco', 'code' => 'MA','created_by'=>1],

            ['country' => 'Mozambique', 'code' => 'MZ','created_by'=>1],

            ['country' => 'Myanmar', 'code' => 'MM','created_by'=>1],

            ['country' => 'Namibia', 'code' => 'NA','created_by'=>1],

            ['country' => 'Nauru', 'code' => 'NR','created_by'=>1],

            ['country' => 'Nepal', 'code' => 'NP','created_by'=>1],

            ['country' => 'Netherlands', 'code' => 'NL','created_by'=>1],

            ['country' => 'New Caledonia', 'code' => 'NC','created_by'=>1],

            ['country' => 'New Zealand', 'code' => 'NZ','created_by'=>1],

            ['country' => 'Nicaragua', 'code' => 'NI','created_by'=>1],

            ['country' => 'Niger', 'code' => 'NE','created_by'=>1],

            ['country' => 'Nigeria', 'code' => 'NG','created_by'=>1],

            ['country' => 'Niue', 'code' => 'NU','created_by'=>1],

            ['country' => 'Norfolk Island', 'code' => 'NF','created_by'=>1],

            ['country' => 'Northern Mariana Islands', 'code' => 'MP','created_by'=>1],

            ['country' => 'Norway', 'code' => 'NO','created_by'=>1],

            ['country' => 'Oman', 'code' => 'OM','created_by'=>1],

            ['country' => 'Pakistan', 'code' => 'PK','created_by'=>1],

            ['country' => 'Palau', 'code' => 'PW','created_by'=>1],

            ['country' => 'Palestine, State of', 'code' => 'PS','created_by'=>1],

            ['country' => 'Panama', 'code' => 'PA','created_by'=>1],

            ['country' => 'Papua New Guinea', 'code' => 'PG','created_by'=>1],

            ['country' => 'Paraguay', 'code' => 'PY','created_by'=>1],

            ['country' => 'Peru', 'code' => 'PE','created_by'=>1],

            ['country' => 'Philippines', 'code' => 'PH','created_by'=>1],

            ['country' => 'Pitcairn', 'code' => 'PN','created_by'=>1],

            ['country' => 'Poland', 'code' => 'PL','created_by'=>1],

            ['country' => 'Portugal', 'code' => 'PT','created_by'=>1],

            ['country' => 'Puerto Rico', 'code' => 'PR','created_by'=>1],

            ['country' => 'Qatar', 'code' => 'QA','created_by'=>1],

            ['country' => 'Réunion', 'code' => 'RE','created_by'=>1],

            ['country' => 'Romania', 'code' => 'RO','created_by'=>1],

            ['country' => 'Russian Federation', 'code' => 'RU','created_by'=>1],

            ['country' => 'Rwanda', 'code' => 'RW','created_by'=>1],

            ['country' => 'Saint Barthélemy', 'code' => 'BL','created_by'=>1],

            ['country' => 'Saint Helena, Ascension and Tristan da Cunha', 'code' => 'SH','created_by'=>1],

            ['country' => 'Saint Kitts and Nevis', 'code' => 'KN','created_by'=>1],

            ['country' => 'Saint Lucia', 'code' => 'LC','created_by'=>1],

            ['country' => 'Saint Martin (French part)', 'code' => 'MF','created_by'=>1],

            ['country' => 'Saint Pierre and Miquelon', 'code' => 'PM','created_by'=>1],

            ['country' => 'Saint Vincent and the Grenadines', 'code' => 'VC','created_by'=>1],

            ['country' => 'Samoa', 'code' => 'WS','created_by'=>1],

            ['country' => 'San Marino', 'code' => 'SM','created_by'=>1],

            ['country' => 'Sao Tome and Principe', 'code' => 'ST','created_by'=>1],

            ['country' => 'Saudi Arabia', 'code' => 'SA','created_by'=>1],

            ['country' => 'Senegal', 'code' => 'SN','created_by'=>1],

            ['country' => 'Serbia', 'code' => 'RS','created_by'=>1],

            ['country' => 'Seychelles', 'code' => 'SC','created_by'=>1],

            ['country' => 'Sierra Leone', 'code' => 'SL','created_by'=>1],

            ['country' => 'Singapore', 'code' => 'SG','created_by'=>1],

            ['country' => 'Sint Maarten (Dutch part)', 'code' => 'SX','created_by'=>1],

            ['country' => 'Slovakia', 'code' => 'SK','created_by'=>1],

            ['country' => 'Slovenia', 'code' => 'SI','created_by'=>1],

            ['country' => 'Solomon Islands', 'code' => 'SB','created_by'=>1],

            ['country' => 'Somalia', 'code' => 'SO','created_by'=>1],

            ['country' => 'South Africa', 'code' => 'ZA','created_by'=>1],

            ['country' => 'South Georgia and the South Sandwich Islands', 'code' => 'GS','created_by'=>1],

            ['country' => 'South Sudan', 'code' => 'SS','created_by'=>1],

            ['country' => 'Spain', 'code' => 'ES','created_by'=>1],

            ['country' => 'Sri Lanka', 'code' => 'LK','created_by'=>1],

            ['country' => 'Sudan', 'code' => 'SD','created_by'=>1],

            ['country' => 'Suricountry', 'code' => 'SR','created_by'=>1],

            ['country' => 'Svalbard and Jan Mayen', 'code' => 'SJ','created_by'=>1],

            ['country' => 'Swaziland', 'code' => 'SZ','created_by'=>1],

            ['country' => 'Sweden', 'code' => 'SE','created_by'=>1],

            ['country' => 'Switzerland', 'code' => 'CH','created_by'=>1],

            ['country' => 'Syrian Arab Republic', 'code' => 'SY','created_by'=>1],

            ['country' => 'Taiwan', 'code' => 'TW','created_by'=>1],

            ['country' => 'Tajikistan', 'code' => 'TJ','created_by'=>1],

            ['country' => 'Tanzania, United Republic of', 'code' => 'TZ','created_by'=>1],

            ['country' => 'Thailand', 'code' => 'TH','created_by'=>1],

            ['country' => 'Timor-Leste', 'code' => 'TL','created_by'=>1],

            ['country' => 'Togo', 'code' => 'TG','created_by'=>1],

            ['country' => 'Tokelau', 'code' => 'TK','created_by'=>1],

            ['country' => 'Tonga', 'code' => 'TO','created_by'=>1],

            ['country' => 'Trinidad and Tobago', 'code' => 'TT','created_by'=>1],

            ['country' => 'Tunisia', 'code' => 'TN','created_by'=>1],

            ['country' => 'Turkey', 'code' => 'TR','created_by'=>1],

            ['country' => 'Turkmenistan', 'code' => 'TM','created_by'=>1],

            ['country' => 'Turks and Caicos Islands', 'code' => 'TC','created_by'=>1],

            ['country' => 'Tuvalu', 'code' => 'TV','created_by'=>1],

            ['country' => 'Uganda', 'code' => 'UG','created_by'=>1],

            ['country' => 'Ukraine', 'code' => 'UA','created_by'=>1],

            ['country' => 'United Arab Emirates', 'code' => 'AE','created_by'=>1],

            ['country' => 'United Kingdom', 'code' => 'GB','created_by'=>1],

            ['country' => 'United States', 'code' => 'US','created_by'=>1],

            ['country' => 'United States Minor Outlying Islands', 'code' => 'UM','created_by'=>1],

            ['country' => 'Uruguay', 'code' => 'UY','created_by'=>1],

            ['country' => 'Uzbekistan', 'code' => 'UZ','created_by'=>1],

            ['country' => 'Vanuatu', 'code' => 'VU','created_by'=>1],

            ['country' => 'Venezuela, Bolivarian Republic of', 'code' => 'VE','created_by'=>1],

            ['country' => 'Viet Nam', 'code' => 'VN','created_by'=>1],

            ['country' => 'Virgin Islands, British', 'code' => 'VG','created_by'=>1],

            ['country' => 'Virgin Islands, U.S.', 'code' => 'VI','created_by'=>1],

            ['country' => 'Wallis and Futuna', 'code' => 'WF','created_by'=>1],

            ['country' => 'Western Sahara', 'code' => 'EH','created_by'=>1],

            ['country' => 'Yemen', 'code' => 'YE','created_by'=>1],

            ['country' => 'Zambia', 'code' => 'ZM','created_by'=>1],

            ['country' => 'Zimbabwe', 'code' => 'ZW','created_by'=>1],

        ];

        foreach ($countries as $key => $value) {

            Country::create($value);

        }
    }
}
