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
          backgroundSize: '100px 100px',
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
            background: 'white',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
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
            fontSize: 60,
            marginTop: 30,
            lineHeight: 1.8,
          }}
        >
          Alan Johnson - Software Engineer
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  )
}
