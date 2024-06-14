<?php

namespace App\Notifications;

use App\Models\Course;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class SendCertificate extends Notification
{
    use Queueable;

    /**
     * Course of certificate
     */
    protected ?Course $course;

    /**
     * Link of certificates
     */
    protected array|string $links;

    /**
     * Create a new notification instance.
     */
    public function __construct(?Course $course = null, array|string $link)
    {
        $this->course = $course;
        $this->links = is_string($link)? [$link] : $link;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        $courseName = is_null($this->course)? "" : $this->course->name;

        return (new MailMessage)
                        ->greeting("Hello {$notifiable->full_name},")
                        ->lineIf(!is_null($this->course), "Congratulations on completing our program {$courseName}!")
                        ->lineIf(is_null($this->course), "Congratulations on completing our programs!")
                        ->lineIf(!is_null($this->course), 'We are pleased to inform you that you have successfully received your certificate.')
                        ->lineIf(is_null($this->course), 'We are pleased to inform you that you have successfully received your certificates.')
                        ->line('Your certificate was attached in this email, you can download your certificate:')
                        ->line('Thank you for your participation!')
                        ->salutation('Best regar(ds,')
                        ->salutation('The '. env('APP_NAME').' Team')
                        ->attachMany($this->links);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
