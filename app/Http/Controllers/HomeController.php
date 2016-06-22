<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{

    protected $baseURI;
    protected $authToken;
    protected $organizationId;
    protected $clientHttp;

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->baseURI = 'https://invoice.zoho.com/api/v3/';
        $this->authToken = getenv('AUTH_TOKEN_ZOHO');
        $this->organizationId = getenv('ORGANIZATION_ID');
        $this->clientHttp = new Client( ['base_uri' => $this->baseURI] );
    }

    public function index()
    {
        return view('home');
    }

    public function invoices()
    {
        $invoices = $this->getInvoices();
        return response()->json( $invoices );
    }

    private function getInvoices( $records = 20 )
    {
        $clientHttp = $this->clientHttp;
        $authtoken = $this->authToken;
        $organization_id = $this->organizationId;

        $response = $clientHttp->get('invoices', [
                                    'query' => [ 'authtoken'        => $authtoken,
                                                'organization_id'   => $organization_id,
                                                'per_page'          => $records ]
                                    ]);
        
        return json_decode( $response->getBody() );
    }

    private function getInvoicesUpperAmount( $amount = 100000 )
    {
        $clientHttp = $this->clientHttp;
        $authtoken = $this->authToken;
        $organization_id = $this->organizationId;

        $response = $clientHttp->get('invoices', [
                                    'query' => [ 'authtoken'        => $authtoken,
                                                'organization_id'   => $organization_id,
                                                'total_greater_than' => $amount
                                                ],
                                    ]);
        
        return json_decode( $response->getBody() );
    }


}
