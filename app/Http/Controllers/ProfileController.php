<?php

namespace App\Http\Controllers;

use App\Http\Resources\BankCardResource;
use App\Models\User;
use App\Repositories\ProfileRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{

    public function topUpMainAccount(Request $request, ProfileRepository $profileRepository): Response
    {
        // TODO: get authenticated user
        /** @var User $user */
        $user = User::query()
            ->firstOrCreate([
                'email' => 'me@z2z.kz',
            ], [
                'name' => 'Z2z',
                'password' => bcrypt('password'),
            ]);

        $cards = $profileRepository->getUserBankCards($user);

        return Inertia::render('top-up-main-account', [
            'cards' => BankCardResource::collection($cards),
        ]);
    }

}
