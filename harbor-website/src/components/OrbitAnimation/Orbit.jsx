import './OrbitStyle.css'; // Certifique-se de criar este arquivo CSS

export function Orbit () {
  return (
    <div className="relative m-8">
      <div className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-blue-500">
        {/* Conteúdo do centro da órbita */}
      </div>
      <div className="orbit absolute inset-0 m-auto h-32 w-32 rounded-full border-2 border-gray-300">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-8 w-8 rounded-full bg-green-500" />
      </div>
    </div>
  )
}
