/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { DomainRawTextFiles } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DomainRawTextFilesUpdateFormInputValues = {
    name?: string;
    description?: string;
    text?: string;
};
export declare type DomainRawTextFilesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DomainRawTextFilesUpdateFormOverridesProps = {
    DomainRawTextFilesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DomainRawTextFilesUpdateFormProps = React.PropsWithChildren<{
    overrides?: DomainRawTextFilesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    domainRawTextFiles?: DomainRawTextFiles;
    onSubmit?: (fields: DomainRawTextFilesUpdateFormInputValues) => DomainRawTextFilesUpdateFormInputValues;
    onSuccess?: (fields: DomainRawTextFilesUpdateFormInputValues) => void;
    onError?: (fields: DomainRawTextFilesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DomainRawTextFilesUpdateFormInputValues) => DomainRawTextFilesUpdateFormInputValues;
    onValidate?: DomainRawTextFilesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DomainRawTextFilesUpdateForm(props: DomainRawTextFilesUpdateFormProps): React.ReactElement;
