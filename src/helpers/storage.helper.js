import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export async function loadString(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(key);
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return null;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export async function load(key: string): Promise<any | null> {
  try {
    const almostThere = (await AsyncStorage.getItem(key)) ?? '';
    return JSON.parse(almostThere);
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function save(key: string, value: any): Promise<boolean> {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * save/load boolean
 */
export async function saveBool(key: string, value: boolean) {
  try {
    await AsyncStorage.setItem(key, value ? 'true' : 'false');
  } catch (error) {
    console.log('error saving', error);
  }
}

export async function loadBool(key: string): Promise<boolean> {
  let data = false;
  try {
    const res = await AsyncStorage.getItem(key);
    data = res === 'true';
  } catch (error) {
    data = false;
  }

  return data;
}

export async function saveNumber(key: string, value: number) {
  try {
    await AsyncStorage.setItem(key, value.toString());
  } catch (error) {
    console.log('error saving', error);
  }
}

export async function loadNumber(key: string): Promise<number> {
  let data = 0;
  try {
    const res = await AsyncStorage.getItem(key);
    data = Number(res);
  } catch (error) {
    data = 0;
  }

  return isNaN(data) ? 0 : data;
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function remove(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(key);
  } catch {}
}

/**
 * Burn it all to the ground.
 */
export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch {}
}
