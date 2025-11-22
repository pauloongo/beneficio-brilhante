-- Update authors table to include credentials
ALTER TABLE public.authors 
ADD COLUMN IF NOT EXISTS credentials TEXT;

-- Insert seed authors
INSERT INTO public.authors (name, bio, credentials, photo_url)
VALUES 
  (
    'João Silva',
    'Especialista em direito previdenciário com mais de 12 anos de experiência auxiliando brasileiros a conquistarem seus benefícios do INSS. Formado em Direito pela USP com pós-graduação em Direito Previdenciário.',
    'Especialista INSS Certificado - 12 anos de experiência',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  ),
  (
    'Maria Oliveira',
    'Advogada especializada em benefícios sociais e programas assistenciais do governo federal. Mestre em Direito Social e Previdenciário pela PUC-SP. Atua há 8 anos orientando famílias sobre seus direitos.',
    'Advogada Benefícios Sociais - OAB/SP 234.567',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  ),
  (
    'Equipe Auxílios BR',
    'Time multidisciplinar de especialistas em políticas públicas, assistência social e direito previdenciário. Nosso objetivo é democratizar o acesso à informação sobre benefícios sociais no Brasil.',
    'Equipe Editorial Especializada',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop'
  )
ON CONFLICT (id) DO NOTHING;