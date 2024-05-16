@props(['id'])

<div class="modal fade" id="{{ $id }}" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div {{ $attributes->class(['modal-dialog']) }}>
        <div class="modal-content">
            <div class="modal-header">
                {{ $header }}

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                {{ $slot }}
            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">@lang('Close')</button>

                {{ $footer }}
            </div>
        </div>
    </div>
</div>