<?php

namespace App\Http\Resources;

use App\Models\BankCard;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * @mixin BankCard
 */
class BankCardResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'number' => $this->number,
            'expireMonth' => $this->expires_month,
            'expireYear' => $this->expires_year,
        ];
    }
}
