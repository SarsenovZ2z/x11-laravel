<?php

namespace App\Repositories;

use App\Models\BankCard;
use App\Models\User;

class BankCardRepository
{

    public function getUserBankCard(User $user, int $bankCardId): ?BankCard
    {
        /** @var ?BankCard $bankCard */
        $bankCard = $user
            ->bankCards()
            ->find($bankCardId);

        return $bankCard;
    }

    public function createUserBankCard(
        User   $user,
        string $number,
        string $expires_year,
        string $expires_month,
    ): BankCard
    {
        $bankCard = new BankCard();
        $bankCard->user_id = $user->getKey();
        $bankCard->number = $number;
        $bankCard->expires_year = $expires_year;
        $bankCard->expires_month = $expires_month;
        $bankCard->save();

        return $bankCard;
    }

}
