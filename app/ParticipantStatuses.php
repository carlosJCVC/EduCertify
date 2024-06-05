<?php

namespace App;

enum ParticipantStatuses: string {
    case ACTIVE = 'Active';
    case INACTIVE = 'Inactive';


    /**
     * return Badde Color according user status
     *
     * @return string
     */
    public function badgeColor(): string
    {
        return match($this)
        {
            self::ACTIVE => 'bg-success',
            self::INACTIVE => 'bg-secondary',
        };
    }


    /**
     * search status from string
     *
     * @param string $status
     * @return self|null
     */
    public static function fromString(string $status): ?self
    {
        foreach (self::cases() as $case) {
            if ($case->value === $status) {
                return $case;
            }
        }

        return null;
    }

    public static function toArray(): array
    {
        return [
          self::ACTIVE->value => self::ACTIVE->value,
          self::INACTIVE->value => self::INACTIVE->value,
        ];
    }
}
