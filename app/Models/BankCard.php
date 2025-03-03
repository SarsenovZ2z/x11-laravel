<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property-read int $id
 * @property int $user_id
 * @property string $number
 * @property string $expires_month
 * @property string $expires_year
 * @property User $user
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class BankCard extends Model
{

    protected $fillable = [
        'user_id',
        'number', 'expires_month', 'expires_year',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

}
