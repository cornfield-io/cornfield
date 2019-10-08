<?php

declare(strict_types=1);

namespace Cornfield;

final class Bootstrap
{
    /**
     * Bootstrap constructor.
     *
     * @param array $options
     */
    public function __construct(array $options = [])
    {
        if (false === isset($options['path.configuration.other'])) {
            $options['path.configuration.other'] = [];
        }

        $options['path.configuration.other'][] = __DIR__.DIRECTORY_SEPARATOR.'Configuration'.DIRECTORY_SEPARATOR.'Parameters.php';
    }
}
