import { Reducer, Action } from "redux";
import { JwtToken } from '@gtm/lib.client.user';

export const createReducer = <S>(initialState: S) => ((reducerMap: {[key: string]: Reducer<S>}) => (state: S = initialState, action: Action): S => {
    return action.type in reducerMap ? reducerMap[action.type](state, action) : state;
});

export async function login(): Promise<void> {
}

export async function logout(): Promise<void> {
}

export async function isloggedin(): Promise<JwtToken> {
    //return Promise.resolve(undefined);
    return Promise.resolve(<JwtToken>{
        name: "John Doe",
        roles: { admin: true },
        scope: null,
        session: "session-id-123",
        user: "user-id-456",
        expires: 0,
        iat: 0,
        exp: 0,
        //"_jwt":".kb6mquetbd_r7pyOq2Qi_L83xfMdKW-WdnSsQniwMLA-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGhhbmggUGhhbSIsInJvbGVzIjp7ImFkbWluIjp0cnVlfSwic2NvcGUiOm51bGwsInNlc3Npb24iOiI1Y2I5ZWIzY2ZjNzQ0OTAwMTczYWI1MWMiLCJ1c2VyIjoiNWE5NTg3M2FhMjhjNDA2ZmFlYzg2ZWQ2IiwiZXhwaXJlcyI6MTU1ODI4MDI1MjU0MywiaWF0IjoxNTU1Njg4MjUyLCJleHAiOjE1NTgyODAyNTJ9"
    });
}