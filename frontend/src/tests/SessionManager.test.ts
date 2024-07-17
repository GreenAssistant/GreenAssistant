import { SessionManager } from '../manager/SessionManager';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';


jest.mock('uuid', () => ({
  v4: jest.fn()
}));

describe('SessionManager', () => {
  let sessionManager: SessionManager;
  const sessionKey = 'testKey';

  beforeEach(() => {
    sessionManager = new SessionManager();
    sessionStorage.clear();
    jest.resetAllMocks();
  });

  it('should generate a new session if none exists', () => {
    const mockUuid = '12345';
    (uuidv4 as jest.Mock).mockReturnValue(mockUuid);

    sessionManager.generate(sessionKey);

    expect(uuidv4).toHaveBeenCalled();
    expect(sessionStorage.getItem(sessionKey)).toBe(mockUuid);
  });

  it('should not generate a new session if one already exists', () => {
    const existingSessionId = 'existingSessionId';
    sessionStorage.setItem(sessionKey, existingSessionId);

    sessionManager.generate(sessionKey);

    expect(uuidv4).not.toHaveBeenCalled();
    expect(sessionStorage.getItem(sessionKey)).toBe(existingSessionId);
  });

  it('should return the session ID if it exists', () => {
    const existingSessionId = 'existingSessionId';
    sessionStorage.setItem(sessionKey, existingSessionId);

    const result = sessionManager.get(sessionKey);

    expect(result).toBe(existingSessionId);
  });

  it('should return "no Session found" if the session does not exist', () => {
    const result = sessionManager.get(sessionKey);

    expect(result).toBe('no Session found');
  });
});
