const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

const projectRoot = __dirname;
const parentRoot = path.resolve(projectRoot, "..");

// Create the default Metro config
const config = getDefaultConfig(projectRoot);

// Add the parent directory as a watch folder
config.watchFolders = [parentRoot];

// Make sure we can properly resolve imports from the parent lib directory
config.resolver.extraNodeModules = {
  lib: path.resolve(parentRoot, "lib"),
};

module.exports = config;
