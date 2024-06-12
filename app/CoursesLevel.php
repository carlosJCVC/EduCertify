<?php

namespace App;

enum CoursesLevel: string {
    case BEGINNER = 'Beginner';
    case INTERMEDIATE = 'Intermediate';
    case ADVANCED = 'Advanced';

    /**
     * search level from string
     *
     * @param string $level
     * @return self|null
     */
    public static function fromString(string $level): ?self
    {
        foreach (self::cases() as $case) {
            if ($case->value === $level) {
                return $case;
            }
        }

        return null;
    }
    

    public static function toArray(): array
    {
        return [
          self::BEGINNER->value => self::BEGINNER->value,
          self::INTERMEDIATE->value => self::INTERMEDIATE->value,
          self::ADVANCED->value => self::ADVANCED->value,
        ];
    }
}
