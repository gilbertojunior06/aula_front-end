import { Icon, Heart, MessageSquare, Home, Megaphone, Calendar, User, Send } from 'lucide-react'
import './App.css'

function Sidebar({icon: Icon ,label}){
  return (
    <div className='nav-item'>
      <Icon size={20}/>
      <span>{label}</span>
    </div>
  )
}
function PostCard(){
  return (
    <div className='post-card'>
      <div className='post-header'>
        <div className='avatar'>D</div>
        <div>
          <div style={{ fontWeight: 'bold', fontSize: '14px'}}>Dona Maria (Ap 42)</div>
          <div style={{ fontSize: '12px', color:'#6b7280'}}>Moradora . 10 min atrás</div>
        </div>
      </div>
      <p className='post-content'>
        Alguém encontrou uma chave de carro no playground hoje cedo?
      </p>
      <div className='post-actions'>
        <button className='action-btn'>
          <Heart size={18}  fill='#6b7280'/>
          <span>6</span>
        </button>
        <button className='action-btn'>
          <MessageSquare size={18}/>
          <span>Comentar</span>
        </button>

      </div>
    </div>
  )
}


function App() {
  return (<>
    <div className='app-container'>
      <aside className='sidebar'>
        <div className='logo-container'>
          <div style={{ background: '#2563eb', padding: '6px', borderRadius: '8px', color: 'white' }}>
            <Home size={20}/>
          </div>
          <div style={{ fontSize: '20px', fontWeight: 'bold'}}>CondoNet</div>
        </div>
        <nav>
          <Sidebar icon={Home} label={'Ínicio'}/>
          <Sidebar icon={Megaphone} label={'Comunicados'}/>
          <Sidebar icon={Calendar} label={'Minhas Reservas'} />
          <Sidebar icon={User} label={'Meu Perfil'} />
        </nav>
      </aside>
      <main className='feed-main'>
        <h2 style={{ marginBottom: '20px', color: '#111827'}}>Mural do Condomínio</h2>
        <div className='new-post-box'>
          <textarea 
            className='post-textarea'
            placeholder='O que deseja compartilhar com seus vizinhos?'
            rows={'3'}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '10px', borderTop:'1px solid #f3f4f6'}}>
            <button className='post-submit'>
              Enviar <Send size={16} />
            </button>
          </div>
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </div>
      </main>
    </div>
    </>
  )
}

export default App
