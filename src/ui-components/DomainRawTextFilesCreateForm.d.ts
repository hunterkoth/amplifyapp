/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DomainRawTextFilesCreateFormInputValues = {
    name?: string;
    description?: string;
    text?: string;
};
export declare type DomainRawTextFilesCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DomainRawTextFilesCreateFormOverridesProps = {
    DomainRawTextFilesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DomainRawTextFilesCreateFormProps = React.PropsWithChildren<{
    overrides?: DomainRawTextFilesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DomainRawTextFilesCreateFormInputValues) => DomainRawTextFilesCreateFormInputValues;
    onSuccess?: (fields: DomainRawTextFilesCreateFormInputValues) => void;
    onError?: (fields: DomainRawTextFilesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DomainRawTextFilesCreateFormInputValues) => DomainRawTextFilesCreateFormInputValues;
    onValidate?: DomainRawTextFilesCreateFormValidationValues;
} & React.CSSProperties>;
export default function DomainRawTextFilesCreateForm(props: DomainRawTextFilesCreateFormProps): React.ReactElement;
