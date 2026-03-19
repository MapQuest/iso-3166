/// <reference path="./jest.config.d.ts" />
import config from '@mapquest/team/jest.config.js'

export default {
  ...config,
  moduleNameMapper: {
    ...config.moduleNameMapper,
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    ...config.transform,
    '\\.tsx?$': ['ts-jest', {
      tsconfig: {
        module: 'CommonJS',
        moduleResolution: 'Node',
        verbatimModuleSyntax: false,
      },
    }],
  },
}
