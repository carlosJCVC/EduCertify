<?php

namespace App\Traits;

trait DatatableTrait
{
    protected function getActionsButtons(int $id, bool $view = true, bool $edit = true, bool $delete = true): String
    {
        $html = '';

        if ($view)
            $html .= "<a href='javascript:void(0)' class='btn-view-user mx-1' data-id='{$id}'><i class='ti ti-eye ti-xs'></i></a>";

        if ($edit)
            $html .= "<a href='javascript:void(0)' class='btn-edit-user mx-1' data-id='{$id}'><i class='ti ti-edit ti-xs'></i></a>";

        if ($delete)
            $html .= "<a href='javascript:void(0)' class='btn-delete-user mx-1' data-id='{$id}'><i class='ti ti-trash ti-xs'></i></a>";

        return $html;
    }
}
