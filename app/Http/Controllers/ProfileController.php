<?php

namespace App\Http\Controllers;

use App\Http\Requests\TopUpRequest;
use App\Http\Resources\BankCardResource;
use App\Models\BankCard;
use App\Models\User;
use App\Repositories\BankCardRepository;
use App\Repositories\ProfileRepository;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{

    public function topUpMainAccount(
        Request           $request,
        ProfileRepository $profileRepository,
    ): Response
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

    public function topUpAccount(
        TopUpRequest       $request,
        BankCardRepository $bankCardRepository,
    ): RedirectResponse
    {
        // TODO: get authenticated user
        /** @var User $user */
        $user = User::query()->first();

        /** @var ?BankCard $bankCard */
        $bankCard = null;

        if ($bankCardId = $request->getCardId()) {
            $bankCard = $bankCardRepository->getUserBankCard($user, $bankCardId);
        } else {
            $bankCard = $bankCardRepository->createUserBankCard(
                $user,
                $request->getCardNumber(),
                $request->getCardExpiresYear(),
                $request->getCardExpiresMonth(),
            );
        }

        $amount = $request->getAmount();

        return back();
    }

}
