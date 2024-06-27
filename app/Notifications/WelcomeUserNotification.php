<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class WelcomeUserNotification extends Notification
{
    use Queueable;

    /**
     * token
     *
     * @var string
     */
    protected string $token;

    /**
     * Create a new notification instance.
     */
    public function __construct(string $token)
    {
        $this->token = $token;
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
        $url = route('password.reset', $this->token) . '?email=' . urlencode($notifiable->email);

        return (new MailMessage)
                    ->subject("Welcome to " . config('app.name') . " — let’s get started!")
                    ->greeting("Hi {$notifiable->full_name}")
                    ->line("Welcome to the " . config('app.name') . " Family!")
                    ->line("First things first, be sure to log-in and complete registration ASAP for our online portal.")
                    ->action('Complete Your Registration Here', $url)
                    ->line('This is where you’ll request and review your content.')
                    ->line('Our expert team is EAGER to get started on your first project.');
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
