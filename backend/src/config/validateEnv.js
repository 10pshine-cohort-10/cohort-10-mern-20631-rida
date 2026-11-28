// jsonwebtoken reads a bare number string as milliseconds, so require a unit (7d, 12h)
const EXPIRES_PATTERN = /^\d+(ms|s|m|h|d|w|y)$/;

const validateEnv = () => {
  const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;
  if (!JWT_SECRET || !JWT_SECRET.trim()) {
    throw new Error("JWT_SECRET is missing");
  }
  if (!JWT_EXPIRES_IN || !EXPIRES_PATTERN.test(JWT_EXPIRES_IN)) {
    throw new Error(
      "JWT_EXPIRES_IN is missing or invalid (use e.g. 7d or 12h)",
    );
  }
};

export default validateEnv;
