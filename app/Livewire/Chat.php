<?php

namespace App\Livewire;

use Livewire\Attributes\Validate;
use Livewire\Component;

class Chat extends Component
{
    #[Validate('required|max:1000')]
    public string $body = '';

    public array $messages = [];

    public function mount()
    {
        $this->messages[] = ['role' => 'system', 'content' => 'You are a medical assistant. When a user describes symptoms or mentions a condition, provide a response that includes possible symptoms they might experience, advice on how to manage or cure the condition, and when to seek medical attention.'];
    }

    public function send()
    {
        $this->validate();

        $this->messages[] = ['role' => 'user', 'content' => $this->body];
        $this->messages[] = ['role' => 'assistant', 'content' => ''];

        $this->body = '';
    }

    public function render()
    {
        return view('livewire.chat');
    }
}
