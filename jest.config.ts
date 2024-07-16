/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/tests/(units|integrations)/**/*.[jt]s?(x)"],
};
