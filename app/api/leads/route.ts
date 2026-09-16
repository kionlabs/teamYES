import { NextResponse } from 'next/server';

/**
 * Lead Data Interface
 */
export interface LeadRequestBody {
  name: string;
  phone: string;
  grade: string;
  concern?: string;
}

/**
 * POST /api/leads
 * Handles lead submission from the landing page.
 *
 * [Architecture & Extensibility Guide]
 * - Supabase Integration:
 *   Replace or augment mock logic below with:
 *   ```ts
 *   import { createClient } from '@supabase/supabase-js';
 *   const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);
 *   const { data, error } = await supabase.from('leads').insert([
 *     { name, phone, grade, concern, created_at: new Date().toISOString() }
 *   ]);
 *   ```
 *
 * - MCP Server Integration:
 *   You can invoke your custom MCP tool or webhook to notify your internal CRM / Slack / Discord:
 *   ```ts
 *   await mcpClient.callTool('notify_new_lead', { name, phone, grade, concern });
 *   ```
 */
export async function POST(request: Request) {
  try {
    const body: LeadRequestBody = await request.json();
    const { name, phone, grade, concern } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim() === '') {
      return NextResponse.json(
        { success: false, message: '성함(name)은 필수 입력 항목입니다.' },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== 'string' || phone.trim() === '') {
      return NextResponse.json(
        { success: false, message: '연락처(phone)는 필수 입력 항목입니다.' },
        { status: 400 }
      );
    }

    // Mock processing log
    console.log('[API Leads] New Lead Submitted:', {
      name: name.trim(),
      phone: phone.trim(),
      grade: grade || '미지정',
      concern: concern?.trim() || '',
      submittedAt: new Date().toISOString(),
    });

    // Simulated successful DB insertion response
    return NextResponse.json(
      {
        success: true,
        message: '리드가 성공적으로 등록되었습니다.',
        data: {
          id: `lead_${Date.now()}`,
          name: name.trim(),
          phone: phone.trim(),
          grade: grade || '미지정',
          createdAt: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API Leads Error]:', error);
    return NextResponse.json(
      { success: false, message: '서버 내부 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
