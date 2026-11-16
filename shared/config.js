/*

Copyright 2025 Esri

Licensed under the Apache License Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. 

*/

/**
 * Shared configuration for the Dance of the Continents project
 * 
 * Centralizes frame-related constants that need to be consistent
 * across different modules.
 */

export const FRAME_CONFIG = {
  // Total number of frames (0000-0207 = 208 frames)
  TOTAL_FRAMES: 208,
  
  // Frame file naming - ensure absolute path from site root
  FRAME_PATH: (import.meta.env.BASE_URL + 'frames_no_labels/').replace(/([^:]\/)\/+/g, '$1'),
  FRAME_EXTENSION: '.jpg'
};

// CSS selectors (used in main controller)
export const SELECTORS = {
  SIDECAR: "#n-nQJJFq > div",
  // Support legacy classes and CSS modules without depending on generated hashes.
  TARGET_DOCKED: '#n-nQJJFq :is(.container, [class*="DockablePanel_container__"])',
  // Find the animation by its URL, independent of StoryMaps' iframe wrappers.
  IFRAME: '#n-nQJJFq iframe[src*="/frames_display/"]',
  MESSAGE_DIV: "#n-5GpYQB"
};

export default { FRAME_CONFIG, SELECTORS };
