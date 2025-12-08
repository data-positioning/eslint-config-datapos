/**
 * ESLint configuration.
 */
import security from 'eslint-plugin-security';
import sonarjs from 'eslint-plugin-sonarjs';
import tseslintParser from '@typescript-eslint/parser';
declare const _default: ({
    ignores: string[];
    files?: undefined;
    languageOptions?: undefined;
    plugins?: undefined;
    settings?: undefined;
    rules?: undefined;
} | {
    files: string[];
    languageOptions: {
        parser: typeof tseslintParser;
        parserOptions: {
            project: string[];
            tsconfigRootDir: string;
        };
    };
    plugins: {
        '@typescript-eslint': {
            configs: Record<string, import("@typescript-eslint/utils/ts-eslint").ClassicConfig.Config>;
            meta: import("@typescript-eslint/utils/ts-eslint").FlatConfig.PluginMeta;
            rules: typeof import("@typescript-eslint/eslint-plugin/use-at-your-own-risk/rules");
        };
        import: import("@eslint/core", { with: { "resolution-mode": "require" } }).Plugin & {
            meta: {
                name: string;
                version: string;
            };
            configs: {
                "recommended": import("eslint").Linter.LegacyConfig;
                "errors": import("eslint").Linter.LegacyConfig;
                "warnings": import("eslint").Linter.LegacyConfig;
                "stage-0": import("eslint").Linter.LegacyConfig;
                "react": import("eslint").Linter.LegacyConfig;
                "react-native": import("eslint").Linter.LegacyConfig;
                "electron": import("eslint").Linter.LegacyConfig;
                "typescript": import("eslint").Linter.LegacyConfig;
            };
            flatConfigs: {
                "recommended": import("eslint").Linter.FlatConfig;
                "errors": import("eslint").Linter.FlatConfig;
                "warnings": import("eslint").Linter.FlatConfig;
                "stage-0": import("eslint").Linter.FlatConfig;
                "react": import("eslint").Linter.FlatConfig;
                "react-native": import("eslint").Linter.FlatConfig;
                "electron": import("eslint").Linter.FlatConfig;
                "typescript": import("eslint").Linter.FlatConfig;
            };
            rules: {
                [key: string]: import("eslint").Rule.RuleModule;
            };
        };
        unicorn: import("@eslint/core", { with: { "resolution-mode": "require" } }).Plugin & {
            configs: {
                recommended: import("eslint").Linter.FlatConfig;
                unopinionated: import("eslint").Linter.FlatConfig;
                all: import("eslint").Linter.FlatConfig;
                "flat/all": import("eslint").Linter.FlatConfig;
                "flat/recommended": import("eslint").Linter.FlatConfig;
            };
        };
        sonarjs: typeof sonarjs;
        security: typeof security;
    };
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': string[];
        };
        'import/resolver': {
            node: {
                extensions: string[];
            };
            typescript: {
                project: string[];
            };
        };
    };
    rules: {
        'no-empty': string;
        'prefer-const': string;
        '@typescript-eslint/consistent-type-imports': string;
        '@typescript-eslint/explicit-function-return-type': string;
        '@typescript-eslint/no-explicit-any': string;
        '@typescript-eslint/no-import-type-side-effects': string;
        '@typescript-eslint/no-unused-vars': string;
        '@typescript-eslint/restrict-template-expressions': (string | {
            allowNumber: boolean;
        })[];
        '@typescript-eslint/strict-boolean-expressions': string;
        'import/no-duplicates': string;
        'sort-imports': (string | {
            allowSeparatedGroups: boolean;
            ignoreCase: boolean;
            memberSyntaxSortOrder: string[];
        })[];
        'unicorn/switch-case-braces': string[];
        'unicorn/filename-case': string;
        'unicorn/no-null': string;
    };
    ignores?: undefined;
})[];
export default _default;
