import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#fff',
          height: '100%',
          width: '100%',
          textAlign: 'center',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          display: 'flex',
        }}
      >
        <div
          style={{
            fontSize: 60,
            lineHeight: 1.8,
          }}
        >
          Alan Johnson
        </div>
        <div
          style={{
            background: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            height: 32,
            width: 32,
          }}
        >
          <div
            style={{
              height: 16,
              width: 16,
              background: 'black',
              borderRadius: '50%',
            }}
          />
        </div>
        <div
          style={{
            fontSize: 48,
            lineHeight: 1.8,
          }}
        >
          Software Engineer
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
