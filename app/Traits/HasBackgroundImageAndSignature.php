<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HasBackgroundImageAndSignature
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
                    ['disk' => $this->backgroundImageDisk()]
                ),
            ])->save();

            if ($previous) {
                Storage::disk($this->backgroundImageDisk())->delete($previous);
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

        Storage::disk($this->backgroundImageDisk())->delete($this->background_image_path);

        $this->forceFill(['background_image_path' => null])->save();
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
                ? Storage::disk($this->backgroundImageDisk())->url($this->background_image_path)
                : '';
        });
    }

    /**
     * Get the URL to the course's signature path.
     *
     * @return Attribute
     */
    public function signatureData(): Attribute
    {
        return Attribute::get(fn () => $this->signature_path);
    }

    /**
     * Get the disk that course background image should be stored on.
     *
     * @return string
     */
    protected function backgroundImageDisk()
    {
        return 'public';
    }
}
