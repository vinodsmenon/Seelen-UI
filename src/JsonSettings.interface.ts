/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The `komorebi.json` static configuration file reference for `v0.1.20`
 */
export interface StaticConfig {
  /**
   * Auto stack windows with the same category in the workspace (default: false)
   */
  auto_stack_by_category?: boolean;
  /**
   * Configurations for native Windows and Komorebi animations
   */
  animations?: null | {
    /**
     * native windows animations delay for consecutive actions in ms (default: 35)
     */
    native_animations_delay?: number;
    /**
     * wait for minimization before restore workspace (default: true)
     */
    finish_miminization_before_restore?: boolean;
    [k: string]: unknown;
  };
  /**
   * Configurations for top bar on containers
   */
  top_bar?: {
    /**
     * When komorebi shows tab bar
     */
    mode?: "Always" | "OnStack" | "Never";
    height?: number;
    tabs?: {
      width?: number;
      /**
       * Text and icons colors on top bar
       */
      color?: string;
      /**
       * Background color
       */
      background?: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * Configurations for popups
   */
  popups?: {
    /**
     * Enable or disable the popups
     */
    enable?: boolean;
    /**
     * X-coordinate position
     */
    x?: number | null;
    /**
     * Y-coordinate position
     */
    y?: number | null;
    /**
     * Height of the popup
     */
    height?: number;
    /**
     * Width of the popup
     */
    width?: number;
    /**
     * Text color
     */
    text_color?: string;
    /**
     * Border color
     */
    border_color?: string;
    /**
     * Border width
     */
    border_width?: number;
    /**
     * Background color
     */
    background?: string;
    [k: string]: unknown;
  };
  /**
   * Unmanaged windows rules (can work as pinned windows)
   */
  unmanage_rules?:
    | {
        id: string;
        kind: "Exe" | "Class" | "Title" | "Path";
        matching_strategy?: "Legacy" | "Equals" | "StartsWith" | "EndsWith" | "Contains" | "Regex";
        [k: string]: unknown;
      }[]
    | null;
  /**
   * Exclude floating rules
   */
  exclude_float_rules?:
    | {
        id: string;
        kind: "Exe" | "Class" | "Title" | "Path";
        matching_strategy?: "Legacy" | "Equals" | "StartsWith" | "EndsWith" | "Contains" | "Regex";
        [k: string]: unknown;
      }[]
    | null;
  /**
   * Display an active window border (default: false)
   */
  active_window_border?: boolean;
  /**
   * Active window border colours for different container types
   */
  active_window_border_colours?: {
    /**
     * Border colour when the container is in monocle mode
     */
    monocle:
      | {
          /**
           * Blue
           */
          b: number;
          /**
           * Green
           */
          g: number;
          /**
           * Red
           */
          r: number;
          [k: string]: unknown;
        }
      | string;
    /**
     * Border colour when the container contains a single window
     */
    single:
      | {
          /**
           * Blue
           */
          b: number;
          /**
           * Green
           */
          g: number;
          /**
           * Red
           */
          r: number;
          [k: string]: unknown;
        }
      | string;
    /**
     * Border colour when the container contains multiple windows
     */
    stack:
      | {
          /**
           * Blue
           */
          b: number;
          /**
           * Green
           */
          g: number;
          /**
           * Red
           */
          r: number;
          [k: string]: unknown;
        }
      | string;
    [k: string]: unknown;
  };
  /**
   * Path to applications.yaml from komorebi-application-specific-configurations (default: None)
   */
  app_specific_configuration_path?: string;
  /**
   * Offset of the window border (default: -1)
   */
  border_offset?: number;
  /**
   * Identify border overflow applications
   */
  border_overflow_applications?: {
    id: string;
    kind: "Exe" | "Class" | "Title" | "Path";
    matching_strategy?: "Legacy" | "Equals" | "StartsWith" | "EndsWith" | "Contains" | "Regex";
    [k: string]: unknown;
  }[];
  /**
   * Width of the window border (default: 8)
   */
  border_width?: number;
  /**
   * Determine what happens when a window is moved across a monitor boundary (default: Swap)
   */
  cross_monitor_move_behaviour?: "Swap" | "Insert";
  /**
   * Global default container padding (default: 10)
   */
  default_container_padding?: number;
  /**
   * Global default workspace padding (default: 10)
   */
  default_workspace_padding?: number;
  /**
   * Set display index preferences
   */
  display_index_preferences?: {
    [k: string]: string;
  };
  /**
   * Individual window floating rules
   */
  float_rules?: {
    id: string;
    kind: "Exe" | "Class" | "Title" | "Path";
    matching_strategy?: "Legacy" | "Equals" | "StartsWith" | "EndsWith" | "Contains" | "Regex";
    [k: string]: unknown;
  }[];
  /**
   * Determine focus follows mouse implementation (default: None)
   */
  focus_follows_mouse?: "Komorebi" | "Windows";
  /**
   * Global work area (space used for tiling) offset (default: None)
   */
  global_work_area_offset?: {
    /**
     * The bottom point in a Win32 Rect
     */
    bottom: number;
    /**
     * The left point in a Win32 Rect
     */
    left: number;
    /**
     * The right point in a Win32 Rect
     */
    right: number;
    /**
     * The top point in a Win32 Rect
     */
    top: number;
    [k: string]: unknown;
  };
  /**
   * DEPRECATED from v0.1.22: no longer required
   */
  invisible_borders?: {
    /**
     * The bottom point in a Win32 Rect
     */
    bottom: number;
    /**
     * The left point in a Win32 Rect
     */
    left: number;
    /**
     * The right point in a Win32 Rect
     */
    right: number;
    /**
     * The top point in a Win32 Rect
     */
    top: number;
    [k: string]: unknown;
  };
  /**
   * Identify applications that have the WS_EX_LAYERED extended window style
   */
  layered_applications?: {
    id: string;
    kind: "Exe" | "Class" | "Title" | "Path";
    matching_strategy?: "Legacy" | "Equals" | "StartsWith" | "EndsWith" | "Contains" | "Regex";
    [k: string]: unknown;
  }[];
  /**
   * Individual window force-manage rules
   */
  manage_rules?: {
    id: string;
    kind: "Exe" | "Class" | "Title" | "Path";
    matching_strategy?: "Legacy" | "Equals" | "StartsWith" | "EndsWith" | "Contains" | "Regex";
    [k: string]: unknown;
  }[];
  /**
   * Set monitor index preferences
   */
  monitor_index_preferences?: {
    [k: string]: {
      /**
       * The bottom point in a Win32 Rect
       */
      bottom: number;
      /**
       * The left point in a Win32 Rect
       */
      left: number;
      /**
       * The right point in a Win32 Rect
       */
      right: number;
      /**
       * The top point in a Win32 Rect
       */
      top: number;
      [k: string]: unknown;
    };
  };
  /**
   * Monitor and workspace configurations
   */
  monitors?: {
    /**
     * Monitor-specific work area offset (default: None)
     */
    work_area_offset?: {
      /**
       * The bottom point in a Win32 Rect
       */
      bottom: number;
      /**
       * The left point in a Win32 Rect
       */
      left: number;
      /**
       * The right point in a Win32 Rect
       */
      right: number;
      /**
       * The top point in a Win32 Rect
       */
      top: number;
      [k: string]: unknown;
    };
    /**
     * Workspace configurations
     */
    workspaces: {
      /**
       * Container padding (default: global)
       */
      container_padding?: number;
      /**
       * Custom Layout (default: None)
       */
      custom_layout?: string;
      /**
       * Layout rules (default: None)
       */
      custom_layout_rules?: {
        [k: string]: string;
      };
      /**
       * Initial workspace application rules
       */
      initial_workspace_rules?: {
        id: string;
        kind: "Exe" | "Class" | "Title" | "Path";
        matching_strategy?: "Legacy" | "Equals" | "StartsWith" | "EndsWith" | "Contains" | "Regex";
        [k: string]: unknown;
      }[];
      /**
       * Layout (default: BSP)
       */
      layout?: "BSP" | "Columns" | "Rows" | "VerticalStack" | "HorizontalStack" | "UltrawideVerticalStack" | "Grid";
      /**
       * Layout rules (default: None)
       */
      layout_rules?: {
        [k: string]:
          | "BSP"
          | "Columns"
          | "Rows"
          | "VerticalStack"
          | "HorizontalStack"
          | "UltrawideVerticalStack"
          | "Grid";
      };
      /**
       * Name
       */
      name: string;
      /**
       * Container padding (default: global)
       */
      workspace_padding?: number;
      /**
       * Permanent workspace application rules
       */
      workspace_rules?: {
        id: string;
        kind: "Exe" | "Class" | "Title" | "Path";
        matching_strategy?: "Legacy" | "Equals" | "StartsWith" | "EndsWith" | "Contains" | "Regex";
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  }[];
  /**
   * Enable or disable mouse follows focus (default: true)
   */
  mouse_follows_focus?: boolean;
  /**
   * Identify applications that send EVENT_OBJECT_NAMECHANGE on launch (very rare)
   */
  object_name_change_applications?: {
    id: string;
    kind: "Exe" | "Class" | "Title" | "Path";
    matching_strategy?: "Legacy" | "Equals" | "StartsWith" | "EndsWith" | "Contains" | "Regex";
    [k: string]: unknown;
  }[];
  /**
   * Delta to resize windows by (default 50)
   */
  resize_delta?: number;
  stackbar?: {
    height?: number;
    mode?: "Always" | "Never" | "OnStack";
    tabs?: {
      background?:
        | {
            /**
             * Blue
             */
            b: number;
            /**
             * Green
             */
            g: number;
            /**
             * Red
             */
            r: number;
            [k: string]: unknown;
          }
        | string;
      focused_text?:
        | {
            /**
             * Blue
             */
            b: number;
            /**
             * Green
             */
            g: number;
            /**
             * Red
             */
            r: number;
            [k: string]: unknown;
          }
        | string;
      unfocused_text?:
        | {
            /**
             * Blue
             */
            b: number;
            /**
             * Green
             */
            g: number;
            /**
             * Red
             */
            r: number;
            [k: string]: unknown;
          }
        | string;
      width?: number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * Identify tray and multi-window applications
   */
  tray_and_multi_window_applications?: {
    id: string;
    kind: "Exe" | "Class" | "Title" | "Path";
    matching_strategy?: "Legacy" | "Equals" | "StartsWith" | "EndsWith" | "Contains" | "Regex";
    [k: string]: unknown;
  }[];
  /**
   * Determine what happens when commands are sent while an unmanaged window is in the foreground (default: Op)
   */
  unmanaged_window_operation_behaviour?: "Op" | "NoOp";
  /**
   * Determine what happens when a new window is opened (default: Create)
   */
  window_container_behaviour?: "Create" | "Append";
  /**
   * Which Windows signal to use when hiding windows (default: minimize)
   */
  window_hiding_behaviour?: "Hide" | "Minimize" | "Cloak";
  [k: string]: unknown;
}
