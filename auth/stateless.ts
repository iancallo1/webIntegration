import 'server-only';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import API_URL from '@/constants/constants';


export async function createSession(token: string) {
    cookies().set("session", token,
        {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/'
        }
    )
    cookies().set("isSign", "true",
        {
            httpOnly: true,
            secure: true,
            sameSite: 'lax',
            path: '/'
        }
    )

    redirect('/dashboard/profile')
}


export async function verifySession() {
    const session = cookies().get('session')?.value
    
    const res: any = await fetch(`${API_URL}/api/user/me`, {
        method: "GET",
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session}`
        }
    })

    if (!res.ok) {
        redirect('/login')
    }

}


export async function destroySession() {
    const session = cookies().get('session')?.value

    const res: any = await fetch(`${API_URL}/api/user/logout`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${session}`
        }
    })
    

    if (!res.ok) {
        return await res.json().message
    }
    else {
        cookies().delete('session')
        cookies().delete('isSign')
        redirect('/login')
    }

}