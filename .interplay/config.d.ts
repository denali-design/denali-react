
export namespace InterplayCLI {
    type PresetRule = {
        /** Pattern matching which preset file(s) match with this rule */
        presetPath: string;

        /** Pattern matching which component name(s) to match with this rule */
        componentName?: string;

        /** Pattern matching which component path(s) to match with this rule */
        componentPath?: string;

        /** Per-component, per-file limit for number of matching instances to use as presets */
        limit?: number;
    }

    type Package = {
        /** Name of a package to import */
        name: string;

        /** Relative path to package.json for this package, from base of repo */
        packagePath: string;

        /** Relative path to component index to use for parsing, from base of repo */
        src: string;

        /** Relative path to component index to use for build, from base of repo (defaults to src entry above) */
        build?: string;
        
        /** Specify any exports in the src entry file that should be ignored */
        ignoreExports?: string[];
    }


    type Events = {
        /** modify config after the CLI resolves source files, before parsing */
        resolveComponentsComplete?: (context: object) => object;

        /** modify config after all parsing, before deploy to interplay */
        parsingComplete?: (context: object) => object;
    }

    type Modifiers = {
        /** modify the babel config used to transpile */
        babelConfig?: (config: object) => object;

        /** modify the webpack config used to bundle your build.entry */
        webpackConfig?: (config: object, webpack: Function) => object;  
    }

    type DesignTokens = {
        [key: string]: DesignTokenTheme
    }

    type DesignTokenTheme = {
        /** glob pattern returning design token JSON files */
        paths: string[];

        /** format of your tokens JSON */
        format?: string;

        /** display name of this theme */
        name?: string;
    }
    
    export interface Settings {

        /** The framework we are importing components for. Currently react is supported. */
        framework: "react"

        /** The packages to import from this repo */
        packages: Package[];

        /** npm packages to build as externals (react and react-dom are set automatically) */
        peerDependencies?: {
            [key: string]: string;
        }

        /** aliases to use for webpack and resolving import paths */
        alias?: {
            [key: string]: string;
        },

        /** Specify a component to use as a wrapper component (if required) when rendering components. The wrapper component must be exported from the deployed build  */
        wrapperComponent?: string;

        /** run webpack in development mode instead of (default) production mode */
        devBuild?: boolean;

        /**
         * Specify files to include on pages containing component, in addition to bundle files.
         * Can be list of urls and/or list of relative paths or glob pattern.
         * @default []
         */
         includePaths: string[];

        /**
         * Specify additional files to deploy.
         * Can be list of relative paths or glob pattern.
         * @default []
         */
         deployPaths: string[];

        /**
         * Specify files to parse for presets.
         * Can be list of relative paths or glob pattern.
         * @default []
         */
        presetPaths: string[];

        /**
         * Specify rules for choosing components instances to use as presets.
         * @default []
         */
        presetRules: PresetRule[];

        /**
         * Specify names of inherited types whose props should be removed from component parsing result (typescript only) 
         * @default []
         */
         filteredTypes?:  string[];

        /**
         * Specify names of custom types that should be treated as components when parsing component source files (typescript only) 
         * @default []
         */
         customComponentTypes?:  string[];

        events?: Events;
        modifiers?: Modifiers;

        /**
         * Specify design tokens JSON files to import, keyed on theme ID
         */
        designTokens?: DesignTokens;
    }
}