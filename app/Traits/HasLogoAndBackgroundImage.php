<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HasLogoAndBackgroundImage
{
    /**
     * Update the course's background image.
     *
     * @return void
     */
    public function updateBackgroundImage(UploadedFile $image, $storagePath = 'course-backgrounds')
    {
        tap($this->background_image_path, function ($previous) use ($image, $storagePath) {
            $this->forceFill([
                'background_image_path' => $image->storePublicly(
                    $storagePath,
                    ['disk' => $this->imageDisk()]
                ),
            ])->save();

            if ($previous) {
                Storage::disk($this->imageDisk())->delete($previous);
            }
        });
    }

    /**
     * Update the course's background image.
     *
     * @return void
     */
    public function updateLogoImage(UploadedFile $image, $storagePath = 'logos')
    {
        tap($this->logo_image_path, function ($previous) use ($image, $storagePath) {
            $this->forceFill([
                'logo_image_path' => $image->storePublicly(
                    $storagePath,
                    ['disk' => $this->imageDisk()]
                ),
            ])->save();

            if ($previous) {
                Storage::disk($this->imageDisk())->delete($previous);
            }
        });
    }

    /**
     * Delete the course's background image.
     *
     * @return void
     */
    public function deleteBackgroundImage()
    {
        if (is_null($this->background_image_path)) {
            return;
        }

        Storage::disk($this->imageDisk())->delete($this->background_image_path);

        $this->forceFill(['background_image_path' => null])->save();
    }

    /**
     * Delete the setting's logo image.
     *
     * @return void
     */
    public function deleteLogoImage()
    {
        if (is_null($this->logo_image_path)) {
            return;
        }

        Storage::disk($this->imageDisk())->delete($this->logo_image_path);

        $this->forceFill(['logo_image_path' => null])->save();
    }

    /**
     * Get the URL to the course's background image.
     *
     * @return Attribute
     */
    public function backgroundImageUrl(): Attribute
    {
        return Attribute::get(function (): string {
            return $this->background_image_path
                ? Storage::disk($this->imageDisk())->url($this->background_image_path)
                : '';
        });
    }

    /**
     * Get the URL to the setting's logo image.
     *
     * @return Attribute
     */
    public function logoImageUrl(): Attribute
    {
        return Attribute::get(function (): ?string {
            return $this->logo_image_path
                ? Storage::disk($this->imageDisk())->url($this->logo_image_path)
                : null;
        });
    }

    /**
     * Get the disk that course background image should be stored on.
     *
     * @return string
     */
    protected function imageDisk()
    {
        return 'public';
    }
}
