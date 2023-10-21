import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

function WelcomeWidget() {
    const [user, setUser] = useState<any>(null);
    // @ts-ignore
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

    useEffect(() => {
        async function fetchData() {
            try {
                const user = await supabase.auth.getUser();
                setUser(user);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);

    const now = new Date();
    const hour = now.getHours();
    let greeting = '';

    if (hour >= 5 && hour < 12) {
        greeting = 'Good morning ';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    let name = 'Test';

    if (user?.email) {
        name = user.email.split('@')[0].replace('.', ' ');
    }

    return (
        <div className=' relative justify-center items-center flex  p-4 text-5xl'>
            <div className='welcome-text'>
                {greeting}, {name}
            </div>
        </div>
    );
}

export default WelcomeWidget;