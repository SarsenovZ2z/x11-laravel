<?php

namespace App\Repositories;

use App\Models\BankCard;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class ProfileRepository
{

    /**
     * @param User $user
     * @return Collection<int, BankCard>
     */
    public function getUserBankCards(User $user): Collection
    {
        return $user->bankCards()->get();
    }

}
