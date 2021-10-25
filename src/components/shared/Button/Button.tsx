import React, { FC } from 'react';

import { Icon } from 'components/shared';

import { StyledButton, StyledSpinner, Text } from './ButtonStyles';

export type Props = {
    className: string;
    children: any;
    variant: 'primary' | 'success' | 'danger' | 'secondary' | 'empty';
    icon: string | any;
    iconSize: number;
    disabled: boolean;
    isWorking: boolean;
    onClick: () => void;
};

const Button: FC<Props> = ({
    children,
    className,
    variant = 'secondary',
    icon = undefined,
    iconSize = 18,
    disabled = false,
    isWorking = false,
    onClick,
    ...props
}, ref) => {

    const handleClick = () => {
        if (!disabled && !isWorking) {
            onClick();
        }
    };

    const getIconColor = (variant: any) =>
        ['secondary', 'empty'].includes(variant) ? color.textDark : '#fff';

    return (
        <StyledButton
            {...props}
            onClick={handleClick}
            variant={variant}
            disabled={disabled || isWorking}
            isWorking={isWorking}
            iconOnly={!children}
            ref={ref}
        >
            {isWorking && <StyledSpinner size={26} color={getIconColor(variant)} />}

            {!isWorking && icon && typeof icon === 'string' ? (
                <Icon type={icon} size={iconSize} color={getIconColor(variant)} />
            ) : (
                icon
            )}
            {children && <Text withPadding={isWorking || icon}>{children}</Text>}
        </StyledButton>
    );
}

export default Button;