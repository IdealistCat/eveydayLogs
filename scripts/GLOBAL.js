// Private Functions
function versionSetup() {
  var version = '0.0.3' // Semantic

  version = '' version + 'a' // Prefix and Suffix
  
  return version;
}

// Public Functions

// Private Variables

// Public Variables
export const SITE_VERSION = if (versionSetup() == 'undefined') ? 'v(undefined)' : `v${versionSetup()}`;
