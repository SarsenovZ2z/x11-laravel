<?php

namespace App\Http\Requests;

use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;

class TopUpRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $checkCardExpiration = function (string $attribute, mixed $value, \Closure $fail) {
            if ($this->getCardId()) {
                return;
            }

            $year = $this->getCardExpiresYear();
            $month = $this->getCardExpiresMonth();

            $date = Carbon::createFromFormat('m-y', "$month-$year");

            if ($date->isBefore(now())) {
                $fail('Card is expired');
            }
        };

        return [
            'amount' => 'required|numeric',
            'bankCardId' => 'nullable|int',
            'bankCard' => 'required_if:bankCardId,=,null',
            'bankCard.bankCardNumber' => 'required_if:bankCardId,=,null|string|size:16',
            'bankCard.bankCardExpireMonth' => [
                'required_if:bankCardId,=,null',
                'string',
                'size:2',
                $checkCardExpiration,
            ],
            'bankCard.bankCardExpireYear' => [
                'required_if:bankCardId,=,null',
                'string',
                'size:2',
                $checkCardExpiration,
            ],
            'bankCard.bankCardCvc' => 'required_if:bankCardId,=,null|string|size:3',
            'bankCard.shouldSaveCard' => 'nullable|boolean',
        ];
    }

    public function getAmount(): int|float
    {
        return $this->input('amount');
    }

    public function getCardId(): ?int
    {
        return $this->input('bankCardId');
    }

    public function getCardNumber(): ?string
    {
        return $this->input('bankCard.bankCardNumber');
    }

    public function getCardExpiresYear(): ?string
    {
        return $this->input('bankCard.bankCardExpireYear');
    }

    public function getCardExpiresMonth(): ?string
    {
        return $this->input('bankCard.bankCardExpireMonth');
    }
}
